import { initializeApollo, gql } from '~/utils/apollo'

export const EXCHANGE_RATES = gql`
  query GetRates($currency: String!) {
    rates(currency: $currency) {
      currency
      name
      rate
    }
  }
`

export async function getRates(currency = 'USD') {
  const result = await initializeApollo().query(
    {
      query: EXCHANGE_RATES,
      fetchPolicy: 'network-only',
      variables: {
        currency,
      },
    },
  )

  return result.data.rates
}
