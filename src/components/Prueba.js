import React from 'react'

const Prueba = () => {
    const datos = [
        {
            name: "madrid-itinerario",
            city: "madrid",
            image: ["parapenteriojaneiro1.jpg", "parapenteriojaneiro2.jpg", "parapenteriojaneiro3.jpg"],
        },
        {
            name: "madrid-itinerario2",
            city: "madrid",
            image: ["arraialcaboriojaneiro1.jpg", "arraialcaboriojaneiro2.jpg", "arraialcaboriojaneiro3.jpg"],
        },
        {
            name: "madrid-itinerario3",
            city: "madrid",
            image: ["cristoredentor1riojaneiro.jpg", "cristoredentor2riojaneiro.jpg", "cristoredentor3riojaneiro.jpg"],
        }

    ]

    return (
        <> {datos.map((item) => {
            return (
                <div style={{ backgroundColor: "green", width: "20vw", height: "30vh", margin: "10px" }}>

                    <p>{item.name}</p>
                    {item.image.map((element) => {
                        return (
                            <div style={{ backgroundColor: "white", width: "10vw", height: "10vh" }}>

                                {<img src={process.env.PUBLIC_URL + `/imagen/itinerarios/${element}`} className="baner-image w-100  d-flex justify-content-center aling-item-center" alt="..." />}                               </div>



                        )
                    })}

                </div>



            )
        })}

        </>



    )
}
export default Prueba;