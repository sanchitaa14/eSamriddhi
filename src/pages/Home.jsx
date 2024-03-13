import React from 'react'
import g18 from "../assets/g18.jpg"
import StatesHeading from '../components/stateshead'
import WasteInvitation from  '../components/wasteinvite'
import ProductCard from '../components/products'
import ParentComponent from '../components/parentcomp'
import Footer from '../components/footer'
export default function Home() {
  return (
    <div className='mt-15'>
        <div className='w-full bg-blue-400 h-96 mb-40 '>
            <img src = {g18}  alt="Indian Handicraft" className='w-full relative '/>
        </div>
        <div className="flex flex-row gap-14 z-100 absolute">
            <ProductCard id="1230" title="hello" price={300} rating={4} image="https://www.bing.com/aclick?ld=e8juswf1x9wzMdiOg92tD-GjVUCUx_V5NGcrLjcNpUhNmETK_7FsM0CADp_N__uoafkF2Xgjf6UmnJZOXMFHO05dNNFL7Yh1XtVb5JUgKB2t6YI_WKtWB2svS3CbKOkWnbJXusHUFloDsVHI5sqGNGXy2u6u9nLnRYe3ScZpnCj0l2tcWlra9wV46B8UZ1B7EdM-TCTA&u=aHR0cCUzYSUyZiUyZnd3dy5teW50cmEuY29tJTJmU3BvcnRzLVNob2VzJTJmTmlrZSUyZk5pa2UtTWVuLUFpci1NYXgtOTctU0UtQ29sb3VyYmxvY2tlZC1SdW5uaW5nLVNob2VzJTJmMjUzMDc0MzQlMmZidXklM2Z1dG1fc291cmNlJTNkZG1zX2Jpbmdfc2hvcHBpbmclMjZ1dG1fbWVkaXVtJTNkYmluZ19jcGNfc2hvcHBpbmclMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX1Nob3BwaW5nX0NhbXBhaWduJTI2bXNjbGtpZCUzZDQ3NjI5YjQxMjU2MTFhNDJmMTNlZmViMThiMjA4MDE1JTI2dXRtX3Rlcm0lM2Q0NTc4MDkxNTgxMTQ5OTAxJTI2dXRtX2NvbnRlbnQlM2RGb290d2Vhcg&rlid=47629b4125611a42f13efeb18b208015"/>
            <ProductCard id="1231" title="hello" price={400} rating={5} image="https://www.bing.com/aclick?ld=e8juswf1x9wzMdiOg92tD-GjVUCUx_V5NGcrLjcNpUhNmETK_7FsM0CADp_N__uoafkF2Xgjf6UmnJZOXMFHO05dNNFL7Yh1XtVb5JUgKB2t6YI_WKtWB2svS3CbKOkWnbJXusHUFloDsVHI5sqGNGXy2u6u9nLnRYe3ScZpnCj0l2tcWlra9wV46B8UZ1B7EdM-TCTA&u=aHR0cCUzYSUyZiUyZnd3dy5teW50cmEuY29tJTJmU3BvcnRzLVNob2VzJTJmTmlrZSUyZk5pa2UtTWVuLUFpci1NYXgtOTctU0UtQ29sb3VyYmxvY2tlZC1SdW5uaW5nLVNob2VzJTJmMjUzMDc0MzQlMmZidXklM2Z1dG1fc291cmNlJTNkZG1zX2Jpbmdfc2hvcHBpbmclMjZ1dG1fbWVkaXVtJTNkYmluZ19jcGNfc2hvcHBpbmclMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX1Nob3BwaW5nX0NhbXBhaWduJTI2bXNjbGtpZCUzZDQ3NjI5YjQxMjU2MTFhNDJmMTNlZmViMThiMjA4MDE1JTI2dXRtX3Rlcm0lM2Q0NTc4MDkxNTgxMTQ5OTAxJTI2dXRtX2NvbnRlbnQlM2RGb290d2Vhcg&rlid=47629b4125611a42f13efeb18b208015"/>
            <ProductCard id="1232" title="hello" price={500} rating={4} image="https://www.bing.com/aclick?ld=e8juswf1x9wzMdiOg92tD-GjVUCUx_V5NGcrLjcNpUhNmETK_7FsM0CADp_N__uoafkF2Xgjf6UmnJZOXMFHO05dNNFL7Yh1XtVb5JUgKB2t6YI_WKtWB2svS3CbKOkWnbJXusHUFloDsVHI5sqGNGXy2u6u9nLnRYe3ScZpnCj0l2tcWlra9wV46B8UZ1B7EdM-TCTA&u=aHR0cCUzYSUyZiUyZnd3dy5teW50cmEuY29tJTJmU3BvcnRzLVNob2VzJTJmTmlrZSUyZk5pa2UtTWVuLUFpci1NYXgtOTctU0UtQ29sb3VyYmxvY2tlZC1SdW5uaW5nLVNob2VzJTJmMjUzMDc0MzQlMmZidXklM2Z1dG1fc291cmNlJTNkZG1zX2Jpbmdfc2hvcHBpbmclMjZ1dG1fbWVkaXVtJTNkYmluZ19jcGNfc2hvcHBpbmclMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX1Nob3BwaW5nX0NhbXBhaWduJTI2bXNjbGtpZCUzZDQ3NjI5YjQxMjU2MTFhNDJmMTNlZmViMThiMjA4MDE1JTI2dXRtX3Rlcm0lM2Q0NTc4MDkxNTgxMTQ5OTAxJTI2dXRtX2NvbnRlbnQlM2RGb290d2Vhcg&rlid=47629b4125611a42f13efeb18b208015"/>
            <ProductCard id="1233" title="hello" price={350} rating={5} image="https://www.bing.com/aclick?ld=e8juswf1x9wzMdiOg92tD-GjVUCUx_V5NGcrLjcNpUhNmETK_7FsM0CADp_N__uoafkF2Xgjf6UmnJZOXMFHO05dNNFL7Yh1XtVb5JUgKB2t6YI_WKtWB2svS3CbKOkWnbJXusHUFloDsVHI5sqGNGXy2u6u9nLnRYe3ScZpnCj0l2tcWlra9wV46B8UZ1B7EdM-TCTA&u=aHR0cCUzYSUyZiUyZnd3dy5teW50cmEuY29tJTJmU3BvcnRzLVNob2VzJTJmTmlrZSUyZk5pa2UtTWVuLUFpci1NYXgtOTctU0UtQ29sb3VyYmxvY2tlZC1SdW5uaW5nLVNob2VzJTJmMjUzMDc0MzQlMmZidXklM2Z1dG1fc291cmNlJTNkZG1zX2Jpbmdfc2hvcHBpbmclMjZ1dG1fbWVkaXVtJTNkYmluZ19jcGNfc2hvcHBpbmclMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX1Nob3BwaW5nX0NhbXBhaWduJTI2bXNjbGtpZCUzZDQ3NjI5YjQxMjU2MTFhNDJmMTNlZmViMThiMjA4MDE1JTI2dXRtX3Rlcm0lM2Q0NTc4MDkxNTgxMTQ5OTAxJTI2dXRtX2NvbnRlbnQlM2RGb290d2Vhcg&rlid=47629b4125611a42f13efeb18b208015"/>
          
        </div>
        <div className='mt-[600px]'>
            <StatesHeading/>    
            <div >
            <ParentComponent/>
            </div>
        </div>
        <div>
          
            <WasteInvitation/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}
