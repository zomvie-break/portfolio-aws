function Button() {
  return <button>I'm a button</button>;
}

export default function MyButton() {
  return (
    <div>
      <h1 className="button-heading">Welcome to my App!</h1>
      <Button />
    </div>
  );
}
