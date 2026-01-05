function Child(props) {
  const { name, age } = props;

  return (
    <div>
      <p>
        나는 {age}살 {name}입니다.
      </p>
    </div>
  );
}

export default Child;
