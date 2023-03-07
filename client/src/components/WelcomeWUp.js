import { useLocation } from 'react-router-dom';

function WelcomeWUp() {
    
    const location = useLocation();

    
    return ( 

        <div className="min-h-screen text-l p-0 block items-center justify-center font-['Quicksand'] ">
            <div class="container mx-auto max-w-sm bg-stone-100 bg-cover rounded-l-lg"> 
                <div class="flex justify-center">
                    <div class="w-full bg-cover rounded-l-lg pb-2 pl-16 pr-16">      
                        <div>
                            <h3 class="pt-10 pl-5 font-bold text-gray-800 text-3xl font-['Quicksand']"> It's the year of 2023 and if you are not 23, or not familiar with the available web-application transit web-application resources in an area, you are not alone!  </h3>
                            <br></br>
                            <h2 class="pl-5 font-bold text-gray-800 text-3xl font-['Quicksand']"> Between the newest competing car service app, finding the website that ACTUALLY has best deals on flights, or figuring out how to use any type of public transportation for the first time. Not to mention creating an account on all these different platforms is daunting - traveling is not as cut and dry as it used to be! </h2>
                            <br></br>
                            <h2 class="pl-5 font-bold text-gray-800 text-3xl font-['Quicksand']"> StreetChariot is a platform designed to educate users on how to access, set up accounts,  and provide key information about the numerous transit websites and apps in one place.  Teaching the user to fish, if you will.   </h2>
                            <br />
                            <h2 class="pl-5 font-bold text-gray-800 text-3xl font-['Quicksand']"> All you have to do is sign-up, login, and then start doing your research on these different resources, figure out what services may be the best fit for you and create an account on any one of these platforms so that you can hit the road!    </h2>
                            <br />
                            <br />
                        </div>
                    </div>    
                </div> 
        </div>    
    </div>
    );
}

export default WelcomeWUp;