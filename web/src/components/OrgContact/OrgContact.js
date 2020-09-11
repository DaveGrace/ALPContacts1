import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ORG_CONTACT_MUTATION = gql`
  mutation DeleteOrgContactMutation($id: Int!) {
    deleteOrgContact(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const OrgContact = ({ orgContact }) => {
  const { addMessage } = useFlash()
  const [deleteOrgContact] = useMutation(DELETE_ORG_CONTACT_MUTATION, {
    onCompleted: () => {
      navigate(routes.orgContacts())
      addMessage('OrgContact deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete orgContact ' + id + '?')) {
      deleteOrgContact({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            OrgContact {orgContact.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{orgContact.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{orgContact.name}</td>
            </tr>
            <tr>
              <th>Street</th>
              <td>{orgContact.street}</td>
            </tr>
            <tr>
              <th>Suburb</th>
              <td>{orgContact.suburb}</td>
            </tr>
            <tr>
              <th>Postcode</th>
              <td>{orgContact.postcode}</td>
            </tr>
            <tr>
              <th>Coverage</th>
              <td>{orgContact.coverage}</td>
            </tr>
            <tr>
              <th>Contact name</th>
              <td>{orgContact.contactName}</td>
            </tr>
            <tr>
              <th>Major purpose</th>
              <td>{orgContact.majorPurpose}</td>
            </tr>
            <tr>
              <th>Contact pn</th>
              <td>{orgContact.contactPN}</td>
            </tr>
            <tr>
              <th>Meeting time</th>
              <td>{timeTag(orgContact.meetingTime)}</td>
            </tr>
            <tr>
              <th>Meeting time frequency</th>
              <td>{orgContact.meetingTimeFrequency}</td>
            </tr>
            <tr>
              <th>Meeting place</th>
              <td>{orgContact.meetingPlace}</td>
            </tr>
            <tr>
              <th>Webpage</th>
              <td>{checkboxInputTag(orgContact.webpage)}</td>
            </tr>
            <tr>
              <th>Webpage address</th>
              <td>{orgContact.webpageAddress}</td>
            </tr>
            <tr>
              <th>Newsletter</th>
              <td>{checkboxInputTag(orgContact.newsletter)}</td>
            </tr>
            <tr>
              <th>Alp members</th>
              <td>{checkboxInputTag(orgContact.alpMembers)}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{orgContact.email}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(orgContact.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOrgContact({ id: orgContact.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(orgContact.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default OrgContact
