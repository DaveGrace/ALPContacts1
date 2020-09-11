import { Link, routes } from '@redwoodjs/router'

import OrgContacts from 'src/components/OrgContacts'

export const QUERY = gql`
  query ORG_CONTACTS {
    orgContacts {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No orgContacts yet. '}
      <Link to={routes.newOrgContact()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ orgContacts }) => {
  return <OrgContacts orgContacts={orgContacts} />
}
