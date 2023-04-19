const Success = () => {
  return (
      <div
          style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <img
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginBottom: "10px"
        }}
        src="https://cdn.pixabay.com/photo/2017/02/16/13/42/box-2071537_960_720.png" alt="delivery"/>
          <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "teal",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
              }}
          >
              Sucessfull.
          </button>
      <p
        style={{
          width: "400px",
          fontSize: "18px",
          textAlign: "center"
      }}
      >Your order is being prepared. Thanks for choosing Lama Shop</p>
      
    </div>
  )
}

export default Success
