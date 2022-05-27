# Creating Forms
This template uses `react-hook-form` to abstract away the state management behind forms.

Creating a new form is fairly simple:
- Create a type with the input fields you want to use
```ts
type NewNoteInput = {
	text: string;
};
```
- Call `useForm` and set the type to your input type that you created before.
```ts
const { register, handleSubmit, formState: { errors } } = useForm<NewNoteInput>();
```
- Create your `onSubmit` function
```ts
const onSubmit: SubmitHandler<NewNoteInput> = (data) => {
    console.log(data);
}
```
- Create your form
```html
<form onSubmit={handleSubmit(onSubmit)}>
    ... registered fields here...
</form>
```
- Register all the inputs
```ts
{...register('fieldName')}
```

## Extra Information
---
react-hook-form docs: [https://react-hook-form.com/get-started](https://react-hook-form.com/get-started)