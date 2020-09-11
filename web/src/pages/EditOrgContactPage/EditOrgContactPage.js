import OrgContactsLayout from 'src/layouts/OrgContactsLayout'
import EditOrgContactCell from 'src/components/EditOrgContactCell'

const EditOrgContactPage = ({ id }) => {
  return (
    <OrgContactsLayout>
      <EditOrgContactCell id={id} />
    </OrgContactsLayout>
  )
}

export default EditOrgContactPage
