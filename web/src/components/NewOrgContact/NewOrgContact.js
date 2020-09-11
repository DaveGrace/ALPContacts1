import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import OrgContactForm from 'src/components/OrgContactForm'

const CREATE_ORG_CONTACT_MUTATION = gql`
  mutation CreateOrgContactMutation($input: CreateOrgContactInput!) {
    createOrgContact(input: $input) {
      id
    }
  }
`

const NewOrgContact = () => {
  const { addMessage } = useFlash()
  const [createOrgContact, { loading, error }] = useMutation(
    CREATE_ORG_CONTACT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.orgContacts())
        addMessage('OrgContact created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createOrgContact({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New OrgContact</h2>
      </header>
      <div className="rw-segment-main">
        <OrgContactForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewOrgContact
