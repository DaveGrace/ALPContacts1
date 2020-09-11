import OrgContactsLayout from 'src/layouts/OrgContactsLayout'
import OrgContactCell from 'src/components/OrgContactCell'

const OrgContactPage = ({ id }) => {
  return (
    <OrgContactsLayout>
      <OrgContactCell id={id} />
    </OrgContactsLayout>
  )
}

export default OrgContactPage
