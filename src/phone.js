export function normalizePhoneNumber(phone) {
  const value = String(phone).trim()
  const prefix = value.startsWith('+') ? '+' : ''
  return `${prefix}${value.replace(/\D/g, '')}`
}

export function formatPhoneNumber(phone) {
  const normalized = normalizePhoneNumber(phone)
  const national = normalized.startsWith('+46')
    ? `0${normalized.slice(3)}`
    : normalized
  const digits = national.replace(/\D/g, '')

  if (digits.length === 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8, 10)}`
  }

  return normalized
}
