const Default = {
  block: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    color: 'white',
    
  },
  container : {
      padding: '1rem 1rem'
  },
  main: {
    backgroundColor: "hsl(209, 23%, 22%)",
    width: "20%",
    display: "flex",
    flexDirection: "column",
    margin: '1rem 2rem',
    borderRadius: '5px',
    boxShadow: '10px 10px 19px -4px rgba(0,0,0,0.12)',
  },
  image : {
    borderRadius: '5px 5px 0 0',
    height: '172px',
    objectFit: 'cover'
  },
  header : {
      fontSize: '20px',
      fontWeight: '700',
  },
  data : {
      fontWeight: '200'
  },
  dataheader : {
    fontWeight: '600'
    }
};
export default Default;
