import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import OrgContactForm from 'src/components/OrgContactForm'

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
const UPDATE_ORG_CONTACT_MUTATION = gql`
  mutation UpdateOrgContactMutation($id: Int!, $input: UpdateOrgContactInput!) {
    updateOrgContact(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ orgContact }) => {
  const { addMessage } = useFlash()
  const [updateOrgContact, { loading, error }] = useMutation(
    UPDATE_ORG_CONTACT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.orgContacts())
        addMessage('OrgContact updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateOrgContact({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit OrgContact {orgContact.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OrgContactForm
          orgContact={orgContact}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
