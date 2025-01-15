import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const SliderSlick = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true, // Active l'autoplay
        speed: 10000, // Transition linéaire lente
        cssEase: "linear", // Transition fluide
        pauseOnHover: true, // Doit permettre d'arrêter le slider au survol
    };

    return (
        <>
            <div className="pt-20 px-3">
                <div
                    className="text-white"
                >
                    <Slider {...settings}>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Charges</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Crédit</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Assurances</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Abonnements</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Total Fixe</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Courantes</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Loisirs</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Occasionnelles</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Divers</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Total Occasionnelles</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Revenu 1</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Revenu 2</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Revenu 3</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Revenu 4</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Total Revenu</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Total all</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 mx-4 text-center h-24">
                                <h3>Commerce</h3>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700 text-center h-24">
                                <h3>Article</h3>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    );
};

export default SliderSlick;