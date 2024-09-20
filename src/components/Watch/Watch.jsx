const Watch = ({ watch }) => {
  const { name, price, image } = watch;
  return (
    <div>
      <h2>Watches: {name}</h2>
      <p>Price: {price}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Watch;
