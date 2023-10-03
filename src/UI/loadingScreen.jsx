import Loader from '../assets/images/loader.gif'

const Loading = () => {
    return (
        <>
            <div className="loader-back h-screen w-full absolute left-0 top-0 z-40 flex justify-center items-center">
                <div className="loader-gradient h-screen w-full" />
            </div>
            <div className="w-full h-full flex flex-col !justify-center !items-center absolute top-0 left-0 z-50">
                <div class="flex flex-col !justify-center !items-center">
                    <img src={Loader} alt="FlexSport" className="mt-[-20px]" width={80} height={80} />
                    <div class="spinner"></div>

                </div>
                <h1 className="font-bold mt-[-20px]">Loading...</h1>
            </div>
        </>
    )
}

export default Loading