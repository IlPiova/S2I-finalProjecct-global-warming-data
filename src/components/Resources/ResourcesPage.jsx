export default function ResourcesPage() {
  function createResourceBox(title, description, link) {
    return (
      <>
        <h2>{title}</h2>
        <p>{description}</p>
        <a target="_blank" href={link}>
          Vai
        </a>
      </>
    );
  }
  return (
    <>
      <div>Pagine ResourcesPage</div>
      {createResourceBox("Provatitolo", "qwertyuioplkjhgfdsazxcvbnm", "")}
    </>
  );
}
