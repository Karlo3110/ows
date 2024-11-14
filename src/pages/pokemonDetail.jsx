import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/js/activeLink";
import "../assets/js/bs-init";
import hoverAnimations from "../assets/js/hoverAnimations";
import smoothScroll from "../assets/js/smoothScroll";
import $ from "jquery";
import { getPokemonDetail } from "../services/getPokemonDetail";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { getBackgroundColor } from "../services/getBackgroundColor";

function PokemonDetail() {
  const { id } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { pokemonDetail, evolutionChain } = await getPokemonDetail(id);
        setPokemonDetail(pokemonDetail);
        setEvolutionChain(evolutionChain);
        console.log(pokemonDetail);
        console.log(evolutionChain);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    smoothScroll($);
    hoverAnimations($);
  }, []);

  if (!pokemonDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="d-none d-sm-none d-md-none d-lg-none d-xl-flex d-xxl-flex flex-column justify-content-center align-items-center sidebar"
        style={{
          position: "fixed",
          minHeight: "100vh",
          width: 150,
          background: "rgba(137, 207, 240,0)",
          display: "flex",
          zIndex: 3,
        }}
      >
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="line"></div>
        <div
          style={{
            transform: "rotate(-90deg)",
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            className="text-uppercase link"
            id={pokemonDetail.name}
            style={{
              textDecoration: "none",
              color: `black`,
              fontSize: 20,
              fontFamily: "Montserrat, sans-serif",
            }}
            href={"#" + pokemonDetail.name}
            data-smooth={"#" + pokemonDetail.name}
          >
            {pokemonDetail.name}
          </a>
        </div>
        <div className="line"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div
        className="justify-content-center align-items-center active"
        id={pokemonDetail.name}
        style={{
          background: getBackgroundColor(pokemonDetail.types[0].type.name),
          zIndex: -2,
          minWidth: "100vw",
          display: "flex",
          minHeight: "100vh",
        }}
      >
        <div
          className="justify-content-center align-items-center"
          style={{
            display: "flex",
            overflow: "hidden",
            position: "absolute",
            color: "rgba(0,0,0,0.1)",
            zIndex: 2,
          }}
        >
          <h1
            className="text-uppercase unselectable"
            style={{ fontSize: "21vw" }}
          >
            {pokemonDetail.name}
          </h1>
        </div>
        <div
          className="container py-4 py-xl-5"
          style={{ width: "100vw", zIndex: 3 }}
        >
          <div
            className="row gy-4 gy-md-0 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2"
            style={{ zIndex: 3 }}
          >
            <div
              className="col-md-6 d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center"
              style={{ zIndex: 3 }}
            >
              <div
                className="flex-column"
                style={{ maxWidth: 450, display: "flex" }}
              >
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h2
                      className="text-uppercase text-5xl md:text-7xl text-black font-extrabold z-[2] m-[0]"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {pokemonDetail.name}
                    </h2>
                  </div>
                </div>

                <div
                  className="justify-content-center align-items-center"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    width: "auto",
                    minHeight: 80,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                >
                  {pokemonDetail.types.map((type) => (
                    <Link
                      to={`/types/${type.type.name}`}
                      key={type.type.name}
                      className="text-decoration-none m-2"
                    >
                      <h1
                        key={type.type.name}
                        style={{
                          backgroundColor: getBackgroundColor(type.type.name),
                          fontSize: 24,
                          fontFamily: "Montserrat, sans-serif",
                          marginLeft: 5,
                          marginRight: 5,
                          padding: 15,
                          border: "1px solid white",
                          borderRadius: "20px",
                          height: 40,
                          width: "auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                        }}
                      >
                        {type.type.name.charAt(0).toUpperCase() +
                          type.type.name.slice(1)}
                      </h1>
                    </Link>
                  ))}
                </div>
                <div
                  className="justify-content-center align-items-center"
                  style={{
                    display: "flex",
                    borderRadius: 5,
                    width: "auto",
                    minHeight: 60,
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "rgb(255,255,255)",
                    fontSize: 28,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 200,
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <h1>Weight:</h1>
                    <p>{pokemonDetail.weight / 10} kg</p>
                  </div>
                  <div style={{ width: "50%" }}>
                    <h1>Height:</h1>
                    <p>{pokemonDetail.height / 10} m</p>
                  </div>
                </div>
                <div
                  className="justify-content-center align-items-center"
                  style={{
                    display: "flex",
                    borderRadius: 5,
                    width: "auto",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    minHeight: 60,
                    marginTop: 5,
                    marginBottom: 5,
                    color: "rgb(255,255,255)",
                    fontSize: 28,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 200,
                  }}
                >
                  <div>
                    <h1>Abilities:</h1>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {pokemonDetail.abilities.map((ability) => (
                      <p
                        style={{
                          color: "white",
                          fontFamily: "Montserrat, sans-serif",
                          textTransform: "uppercase",
                          fontSize: 24,
                          borderRadius: 25,
                          textAlign: "center",
                          margin: "0 auto",
                          paddingLeft: 5,
                          width: "auto",
                          fontWeight: 200,
                        }}
                        key={ability.ability.name}
                      >
                        | {ability.ability.name} |
                      </p>
                    ))}
                  </div>
                </div>
                <p
                  className="my-3"
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "Montserrat, sans-serif",
                    color: `black`,
                  }}
                >
                  {pokemonDetail.description}
                </p>
              </div>
            </div>
            <div className="col-md-6" style={{ zIndex: 1 }}>
              <div className="p-xl-5 m-xl-5 flex justify-center items-center">
                <img
                  className=" w-100 "
                  style={{ minHeight: 300 }}
                  src={
                    pokemonDetail.sprites.other["official-artwork"]
                      .front_default
                  }
                  alt={pokemonDetail.name}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-none d-md-flex justify-content-center align-items-center"
          style={{
            textDecoration: "none",
            zIndex: 2,
            position: "absolute",
            top: 20,
            right: 100,
            height: 45,
            width: 200,
            display: "flex",
            marginTop: 10,
          }}
        >
          <a
            className="social-link"
            href="https://www.instagram.com/pokemon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="mr-2" style={{ fontSize: 50 }} />
          </a>
          <a
            className="social-link"
            href="https://www.facebook.com/Pokemon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="mr-2" style={{ fontSize: 45 }} />
          </a>
          <a
            className="social-link"
            href="https://twitter.com/Pokemon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="mr-2" style={{ fontSize: 50 }} />
          </a>
        </div>
      </div>
    </>
  );
}

export default PokemonDetail;
