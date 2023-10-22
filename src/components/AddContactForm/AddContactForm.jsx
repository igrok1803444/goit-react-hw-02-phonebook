import { Label, Form, SubmitButton } from './AddContactForm.styled';
export const AddContactForm = ({ handleFunction }) => {
  return (
    <Form onSubmit={handleFunction}>
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
