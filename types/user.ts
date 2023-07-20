
export type AddressInfoType = {
  address: string
  appSuite: string
  city: string
  state: string
  postalCode: string
  country: string
  contactNumber: string
  completedOnboarding?: boolean
  isLoggedIn?: boolean
}
export type PersonalInfoDetailsType = {
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  dateOfBirth: string
  occupationStatus: string
  gender: string
}

export type AddressDetailsType = {
  nationality: string
  residencyStatus: string
}

export type UserInfoType = PersonalInfoDetailsType &
  AddressInfoType &
  AddressDetailsType
export type TokenPayload =  {
  completedOnboarding: boolean
  createdAt: string
  appName: string
  firstName: string
  lastName: string
  email: string
  userType: string
  id?: string
  iat: number
  exp: number
}
