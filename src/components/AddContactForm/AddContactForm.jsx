import { Label, Form, SubmitButton } from './AddContactForm.styled';

export const AddContactForm = ({ addFunction }) => {
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        addFunction({
          name: event.target.name.value,
          number: event.target.number.value,
        });
        event.target.reset();
      }}
    >
      <Label>
        {' '}
        Name:
        <input type="text" name="name" required />
      </Label>
      <Label>
        {' '}
        Phone:
        <input type="tel" name="number" required />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
