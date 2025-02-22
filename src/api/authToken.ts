import { CFG } from '@/cfg'

type TokenResponse = {
  access_token: string
  expiry_date: number
}

const TOKEN_LS_KEY = 'tere&tommi_token'

const parseTokenFromStorage = () => {
  const token = localStorage.getItem(TOKEN_LS_KEY)

  return token ? JSON.parse(token) : undefined
}

let token: TokenResponse = parseTokenFromStorage()

const isTokenAboutToExpire = (token: TokenResponse) => {
  const now = new Date().getTime()
  const expiryDate = token.expiry_date

  return expiryDate < now
}

const refreshToken = async () => {
  const res = await fetch(`${CFG.serverUrl}`)
  const fetchedToken = await res.json()

  localStorage.setItem(TOKEN_LS_KEY, JSON.stringify(fetchedToken))
  token = parseTokenFromStorage()
}

export const getToken = async () => {
  if (!token) {
    await refreshToken()
  }

  if (isTokenAboutToExpire(token)) {
    await refreshToken()
  }

  return token
}
