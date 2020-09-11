import OrgContact from 'src/components/OrgContact'

export const QUERY = gql`
  query FIND_ORG_CONTACT_BY_ID($id: Int!) {
    orgContact: orgContact(id: $id) {
      id
      name
      street
      suburb
      postcode
      coverage
      contactName
      majorPurpose
      contactPN
      meetingTime
      meetingTimeFrequency
      meetingPlace
      webpage
      webpageAddress
      newsletter
      alpMembers
      email
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>OrgContact not found</div>

export const Success = ({ orgContact }) => {
  return <OrgContact orgContact={orgContact} />
}
