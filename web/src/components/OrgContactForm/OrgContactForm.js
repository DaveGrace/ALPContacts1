import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const OrgContactForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.orgContact?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.orgContact?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="street"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Street
        </Label>
        <TextField
          name="street"
          defaultValue={props.orgContact?.street}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="street" className="rw-field-error" />

        <Label
          name="suburb"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Suburb
        </Label>
        <TextField
          name="suburb"
          defaultValue={props.orgContact?.suburb}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="suburb" className="rw-field-error" />

        <Label
          name="postcode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Postcode
        </Label>
        <NumberField
          name="postcode"
          defaultValue={props.orgContact?.postcode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="postcode" className="rw-field-error" />

        <Label
          name="coverage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Coverage
        </Label>
        <TextField
          name="coverage"
          defaultValue={props.orgContact?.coverage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="coverage" className="rw-field-error" />

        <Label
          name="contactName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contact name
        </Label>
        <TextField
          name="contactName"
          defaultValue={props.orgContact?.contactName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="contactName" className="rw-field-error" />

        <Label
          name="majorPurpose"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Major purpose
        </Label>
        <TextField
          name="majorPurpose"
          defaultValue={props.orgContact?.majorPurpose}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="majorPurpose" className="rw-field-error" />

        <Label
          name="contactPN"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contact pn
        </Label>
        <TextField
          name="contactPN"
          defaultValue={props.orgContact?.contactPN}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="contactPN" className="rw-field-error" />

        <Label
          name="meetingTime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Meeting time
        </Label>
        <TextField
          name="meetingTime"
          defaultValue={props.orgContact?.meetingTime}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="meetingTime" className="rw-field-error" />

        <Label
          name="meetingTimeFrequency"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Meeting time frequency
        </Label>
        <TextField
          name="meetingTimeFrequency"
          defaultValue={props.orgContact?.meetingTimeFrequency}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="meetingTimeFrequency" className="rw-field-error" />

        <Label
          name="meetingPlace"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Meeting place
        </Label>
        <TextField
          name="meetingPlace"
          defaultValue={props.orgContact?.meetingPlace}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="meetingPlace" className="rw-field-error" />

        <Label
          name="webpage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Webpage
        </Label>
        <CheckboxField
          name="webpage"
          defaultChecked={props.orgContact?.webpage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="webpage" className="rw-field-error" />

        <Label
          name="webpageAddress"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Webpage address
        </Label>
        <TextField
          name="webpageAddress"
          defaultValue={props.orgContact?.webpageAddress}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="webpageAddress" className="rw-field-error" />

        <Label
          name="newsletter"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Newsletter
        </Label>
        <CheckboxField
          name="newsletter"
          defaultChecked={props.orgContact?.newsletter}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="newsletter" className="rw-field-error" />

        <Label
          name="alpMembers"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Alp members
        </Label>
        <CheckboxField
          name="alpMembers"
          defaultChecked={props.orgContact?.alpMembers}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="alpMembers" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.orgContact?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OrgContactForm
