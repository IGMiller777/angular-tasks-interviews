export interface IData {
  _id: string,
  amount: string,
  type: string,
  name: {
    first: string,
    last: string
  },
  company: string,
  email: string,
  phone: string,
  address: string
}
