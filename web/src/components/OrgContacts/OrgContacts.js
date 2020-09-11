import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_ORG_CONTACT_MUTATION = gql`
  mutation DeleteOrgContactMutation($id: Int!) {
    deleteOrgContact(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const OrgContactsList = ({ orgContacts }) => {
  const { addMessage } = useFlash()
  const [deleteOrgContact] = useMutation(DELETE_ORG_CONTACT_MUTATION, {
    onCompleted: () => {
      addMessage('OrgContact deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete orgContact ' + id + '?')) {
      deleteOrgContact({ variables: { id }, refetchQueries: ['ORG_CONTACTS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Street</th>
            <th>Suburb</th>
            <th>Postcode</th>
            <th>Coverage</th>
            <th>Contact name</th>
            <th>Major purpose</th>
            <th>Contact pn</th>
            <th>Meeting time</th>
            <th>Meeting time frequency</th>
            <th>Meeting place</th>
            <th>Webpage</th>
            <th>Webpage address</th>
            <th>Newsletter</th>
            <th>Alp members</th>
            <th>Email</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {orgContacts.map((orgContact) => (
            <tr key={orgContact.id}>
              <td>{truncate(orgContact.id)}</td>
              <td>{truncate(orgContact.name)}</td>
              <td>{truncate(orgContact.street)}</td>
              <td>{truncate(orgContact.suburb)}</td>
              <td>{truncate(orgContact.postcode)}</td>
              <td>{truncate(orgContact.coverage)}</td>
              <td>{truncate(orgContact.contactName)}</td>
              <td>{truncate(orgContact.majorPurpose)}</td>
              <td>{truncate(orgContact.contactPN)}</td>
              <td>{timeTag(orgContact.meetingTime)}</td>
              <td>{truncate(orgContact.meetingTimeFrequency)}</td>
              <td>{truncate(orgContact.meetingPlace)}</td>
              <td>{checkboxInputTag(orgContact.webpage)}</td>
              <td>{truncate(orgContact.webpageAddress)}</td>
              <td>{checkboxInputTag(orgContact.newsletter)}</td>
              <td>{checkboxInputTag(orgContact.alpMembers)}</td>
              <td>{truncate(orgContact.email)}</td>
              <td>{timeTag(orgContact.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.orgContact({ id: orgContact.id })}
                    title={'Show orgContact ' + orgContact.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editOrgContact({ id: orgContact.id })}
                    title={'Edit orgContact ' + orgContact.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete orgContact ' + orgContact.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(orgContact.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrgContactsList
