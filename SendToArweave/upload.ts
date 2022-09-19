
import * as fs from 'fs';
import Arweave from 'arweave';


(async () => {

    const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false,
    });

    // Upload image to Arweave
    const data = fs.readFileSync('./ape-punk.png');
    
    const transaction = await arweave.createTransaction({
        data: data
    });

    
    transaction.addTag('Content-Type', 'image/png');

    await arweave.transactions.sign(transaction, {"kty":"RSA","n":"weAHdfTHigXC4JJVMOt7x7wKPWLm6c276RitVKn6AwgmeTWy5PyEJq8wy9AcCZIlU5xD1d8hotwQ3wOK8hTdt-6z6d1MS-6SLB_6klWhhMgbsfysYdAr5-KzG_lQrfGoMxkmZq0JljhICKUuP4juU_RmxSq-cZ2PK_vuhm2vPUKHMEw1Lbm2jk1-m0dvwyUQjwzQ4AZIy-QX2HTD8lEORkSodU6n9q9oA0e-twbizSsRFvrac00MJ7dK_2oR_Uzxv2PVCMgoKvHcowgAhq-iiuIqfk4vQ_4xaaWzbNnylyX8thwoMkFzzPWGlY9utF4Fbl55VmkzgNAWkW3zfVlriCRgaBHcervsIrLjaDsDqMv8k6uIGpiFjjIK9kbp3rZZqn2mBPC6xkZk8nruoFySM6N_WQOWAFP2w0jryTbafGe4s_4-ZpHImOvNQMEkb-O6QqumfnzB-iwhbKV8_Wz34xkZXqSGG-hKO_bVRau8_VBtUbNKQHhPNZ_0UORLdR8m8694_xm2-0CL0xL6Bb29Kz6L5MvH4Ocs7ldWDG7hNMfLiTb4Pkp1SRpbn-0GsbqRwhZtwJPeKexthPIlwdnM4inGk9_Rve8Xbbz47F9gYgL7avT5maYVZqCaYwlgtqWu3CQkjAJUbIm2AqtbUKBlip8iIerDAo-LIi-usX0zfxs","e":"AQAB","d":"BVbzPadxO3bvKBo_qGpD7XtbWNd5fqUA8OmSFIvd6-l0jdARzka6KQqYMHTZ4NWam5PpNmG_3mlrOYkycXprpN45LE7BBDJc6kQzNYaQPUT5pkxMPyFppChVQIb8Vt4aANZHfXp0kiOYsExEWtGdpshLcFC-EAkD4XU924v30JsdeBIRQOIligPOYd500I4bx6TVt-XUaXEtyvNkVi8vUnYfoaN58sxf8_8s3IOfCYGPJe_gxl4v4IQm16QHPM-6tMe-HVDN8mjY59CXmx4JPwP9oZ7rpFbC66L5rxzNlqYgMK_T15Z_5vw4KbRamzMfuSt28g9RsNGKXZUGqMQmtvvcKqbvUNWuDEYp2TJjpB_RGa1mk-ES6_y6hr3nqu9ZPKXSDAPhoeQI2qgHwDOIHCTertFzSKgyCwLHaHDzUA8vSogEtf_bGgp55o0GgCVbBelK_JMNiSB62GptQR3es4fsh4d8ubNufxp3tCKpnP5MsvqekvGwWuugZ9dBZMaEvCGh0PMz6b9n8TM-ZanJNr_PuZjkbnF9B8c0QmAuih4YG_QADDJln60FwFvKtB_3lCu9f7wq9foBeXYPPdGgm3viitDGl1mLD4Vn9dKDeEgK-Mztn23MIHzL5klEB3nH0fIw50Uc0BmMW5E54uvxkP7Gnl65mzGdQEVkJIw9XAE","p":"9jyorb2DmQvyvCexc92k2ZKoo7JThJXL7q00EO4uJbGI6KqvOtPNZg01A6K3EG5xsulJCJZq_7qaiUu4_WKzJPpvayTlBj2kQiX-JfUIUjwWstIj5DeV5eaj3mN9M95PHSz9_aA_qfVjkY2Az239CgpMxAOvskYp7_VL8Ok_dpnssWV3A9dIbcFu4SnrWiqQJ81ePy_ZXwrJ2UTZhSCj-XcOpazweBGowO7t9tuEAh8LVMRv9209GlFqLVLXRa_ppOPEa25WO-Dcaismzwqx30kMU3j3y_WpfHnMPfTJTata5qOqh0l6sl_HxNXqU8Q4DJ8j2mRpUWSqkPzQMdc1Gw","q":"yY_j05o_L4PdGypuRR1u0guIP0D1ye4wp7UzL9OTNE1ckwobtoUATHO5Xo-H0kPbVHUz2BgauLEjYmJ6i3rDYA1OdWxUye7RQ_iGIH8WdoWCTPK5VN92kWcMrMQvXQIemnqRJ6RPGiMhKJrvyFixtuZ0XdLA9TjBXz_pDwHDEtmFvCIy_F05OzhdN_f4Uv8HTNr5oE3OPplh3u46FXKEhNSvT-lF0P8PTycA4gUuMVPq5289XqWqKovw2pDXc0pXDHhW_1KCfI0S42Z9Bbohq9Dii5nTt0wXNoKUpMywz2Qg7_HaPsEFpVkxLGDJdh3bPweUx1TS74OqKVgchjt-AQ","dp":"AivyyOV8_aKPV316IS15QLn8ZsUx219-1vIMHYIcQhTYwkSPGxO3IglHyGps9uYidpN8I2lANFUu-7sBPKrcLZ1P0kAXDQEKK9Mt9KO-mQsSoC0eR-r9lXN9Sn7SIdz6EaXN76i0JwmVATmgQzQTIT2KA8iMiiP4RreBHfTQrHkbD013yT7i0qT8F1xJSRhLAS7cf-4qGp57vUDQMk5hY9fa9zcZP9XYCSuSSbUR6vrfHLZGzoXWHh9NsmyinWi5xMyFdPUaKZkIGJ-czgKoIvH_-9R7Sv81qXVhicJY7ChwuswCuwK45E3X8zJ3yJlYbTQSGuD71M3weyrfozDktQ","dq":"UIukgjGYYFd0at-o0wuw9lTPbF98GOaLIOmC-_CzWWo0vTmD24sIlISGJeh7YSXmprhzMD5ppzZ6Kl2qFMTJAEAxAzF4LH23uE6-4ouGoXQ2nqM8NlNaIT6pzPxU5Pjs29Rw3wOE7K_vFzfa7BetZKZxB_EpVJUKiRKUAoA0wPqVu5l7AGgMb8LVVYFNBXWOKEM1D78n1NIcTyappVpu5FnNeMSCNsNGDd5LNwbU77dWHofQYVsYRgpIBD9vKU4ivQP11-_T3wvM6XxSJ5C61dsSPLEK7quEdy71UWnOmgGsO9ZM3Vjq9alPwiknOIEz1NsltAYMiNP3kq_4LhfmAQ","qi":"aLEYNj9fr8sS5-SsrhtKFwp7Gmp5P_ET-TQv0-Ry-FwdZhXCodyrLc6DjoG7WxiHxNX3AVn6dZPYB6uRAyi31PG1G2qSGvwWBdBdeWz2KxPLrVtfJCC8s2EfIZpKh8_PP1QZZ3Xk17CkVymwnw5XAl-45RYqHR7g9Tip5HLS_w6K5ZDOptvGoolacRTSLHSI5sBMUkrf1lXw7v1OSRSBvK7FpNAiKE2Uvpm7m6lr7m4vFMDCB5Tyb2gh6Q1IEoKjF-Ut1yf7f9hhlgvbJhqnKsrMe_fwnm8eMrewVz1-2tIbsrGdicpoTJfSXUNjeqndIAqBTYtZ_dzaP6TKmM47JA"});
    

    const response = await arweave.transactions.post(transaction);
    
    console.log(response);

    const imageUrl = transaction.id ? `https://arweave.net/${transaction.id}` : undefined;

    console.log(imageUrl);
    // Upload metadata to Arweave

//     const metadata = {
//         name: "Custom NFT #1",
//         symbol: "CNFT",
//         description:
//           "A description about my custom NFT #1",
//         seller_fee_basis_points: 500,
//         external_url: "https://www.customnft.com/",
//         attributes: [
//             {
//                 trait_type: "NFT type",
//                 value: "Custom"
//             }
//         ],
//         collection: {
//           name: "Test Collection",
//           family: "Custom NFTs",
//         },
//         properties: {
//           files: [
//             {
//               uri: imageUrl,
//               type: "image/png",
//             },
//           ],
//           category: "image",
//           maxSupply: 0,
//           creators: [
//             {
//               address: "CBBUMHRmbVUck99mTCip5sHP16kzGj3QTYB8K3XxwmQx",
//               share: 100,
//             },
//           ],
//         },
//         image: imageUrl,
//       }

//     const metadataRequest = JSON.stringify(metadata);
    
//     const metadataTransaction = await arweave.createTransaction({
//         data: metadataRequest
//     });
    
//     metadataTransaction.addTag('Content-Type', 'application/json');
    
//     await arweave.transactions.sign(metadataTransaction, wallet);
    
//     await arweave.transactions.post(metadataTransaction);    
})();
