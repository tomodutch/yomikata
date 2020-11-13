import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const VocabularyForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.vocabulary?.id)
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
          name="word"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Word
        </Label>
        <TextField
          name="word"
          defaultValue={props.vocabulary?.word}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="word" className="rw-field-error" />

        <Label
          name="furigana"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Furigana
        </Label>
        <TextField
          name="furigana"
          defaultValue={props.vocabulary?.furigana}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="furigana" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VocabularyForm
