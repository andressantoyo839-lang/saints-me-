export function buildWhatsAppUrl(
  baseLinkOrPhone: string,
  params: {
    variety?: string;
    presentation?: 'pepa' | 'molido';
    customMessage?: string;
  } = {}
): string {
  if (!baseLinkOrPhone) {
    return 'https://wa.link/0pmojw';
  }

  const trimmed = baseLinkOrPhone.trim();

  // Si es un enlace corto wa.link
  if (trimmed.includes('wa.link/')) {
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    return `https://${trimmed}`;
  }

  // Si es un enlace directo wa.me
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    try {
      const url = new URL(trimmed);
      let text = url.searchParams.get('text') || '';
      
      const parts: string[] = [];
      if (text) {
        parts.push(text);
      } else {
        parts.push('Hola Saints Me, quiero pedir mi café.');
      }

      if (params.variety) {
        parts.push(`Variedad: ${params.variety}.`);
      }
      if (params.presentation) {
        parts.push(`Presentación: ${params.presentation === 'pepa' ? 'En pepa (grano entero)' : 'Molido'}.`);
      }
      if (params.customMessage) {
        parts.push(params.customMessage);
      }

      url.searchParams.set('text', parts.join(' '));
      return url.toString();
    } catch {
      return trimmed;
    }
  }

  // Si es número telefónico (e.g. 3242563514 o 573242563514)
  let cleanPhone = trimmed.replace(/\D/g, '');
  if (cleanPhone.length === 10 && cleanPhone.startsWith('3')) {
    cleanPhone = `57${cleanPhone}`;
  }
  if (!cleanPhone) {
    cleanPhone = '573242563514';
  }

  const messageParts: string[] = ['Hola Saints Me, deseo reservar mi café.'];
  if (params.variety) {
    messageParts.push(`Variedad: ${params.variety}.`);
  }
  if (params.presentation) {
    messageParts.push(`Presentación: ${params.presentation === 'pepa' ? 'En pepa (grano)' : 'Molido'}.`);
  }
  if (params.customMessage) {
    messageParts.push(params.customMessage);
  }
  const textEncoded = encodeURIComponent(messageParts.join(' '));
  return `https://wa.me/${cleanPhone}?text=${textEncoded}`;
}
