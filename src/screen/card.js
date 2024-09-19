import './card.css'
import {useNavigate} from "react-router-dom";



const Cinfo =[
	{
		icon:<span class="material-symbols-outlined">
flash_on
</span>,
		title:"Instant Access",
		information:" Apply and activate Instantly",
	},
	{
		icon:<span class="material-symbols-outlined">
money_bag
</span>,
		title:"Safety",
		information:" No physical handling. No risk of loss",
	},
	{
		icon:<span class="material-symbols-outlined">
credit_card
</span>,
		title:"Online Marchants Acceptance",
		information:"Accepted by 40,000+ online Marchants including JUMIA,KONGA, NETFLIX,UBER Wallet Funding and others",
	},
	{
		icon:<span class="material-symbols-outlined">
verified_user
</span>,
		title:"Security",
		information:" CBN License,NDIC Insured.",
	}
	];

function Card(){
	const navigate=useNavigate()
	const clickHome=()=>{
	navigate("/Home",{})
	}
	
	
	
	const clickReward=()=>{
	navigate("/Reward",{})
	}
	
	const clickFinance=()=>{
	navigate("/Finance",{})
	}
	
	const clickCard=()=>{
	navigate("/Card",{})
	}
	
	const clickMe=()=>{
	navigate("/Me",{})
	}
	
	return(
	<div className="Ccon">
		
		<div className="Ctop">
			<div className="CtopC">Card</div>
			<div className="CtopQ">Q&A</div>
		</div>
		
		<div className="CvpCard">
			<div>Virtual Card</div>
			<div>Physical Card</div>
		</div>
		
		<div className="Ccimage">
			<img src="https://imgur.com/a/RFif2pV" className="Ccimage-pic" />
		</div>
		
		<div className="Cinstructions">
        {Cinfo.map((item, index) => (
          <div key={index} className="Cinfo-item">
            <div className="Cinfo-icon">{item.icon}</div>
            <div className="Cinfo-content">
              <h2 className="Cinfo-title">{item.title}</h2>
              <p className="Cinfo-information">{item.information}</p>
            </div>
          </div>
        ))}
      </div>
      
      
		<div className="Cgetbtn">
			<div className="Ctc">
				<div>Click button below to accept</div>
				<div className="Ctc2"> Terms & condition</div>
			</div>
			<div className="Cgnbtn"> 
				<div> Get it Now</div>
			</div>
		</div>
		
		
		
		
		
		
		<div className="options">
			<div onClick={clickHome} className="Home">
				<span className="material-symbols-outlined">
home
</span>
				<div>Home</div>
			</div>
			<div onClick={clickReward} className="Reward">
				<span class="material-symbols-outlined">
diamond
</span>
				 <div>Reward</div>
			</div>
			<div onClick={clickFinance} className="Finance">
				<span class="material-symbols-outlined">
bid_landscape
</span>
				<div>Finance</div>
			</div>
			<div onClick={clickCard} className="Card">
				<span class="material-symbols-outlined">
credit_card
</span>
				<div>Card</div>
			</div>
			<div onClick={clickMe} className="Me">
				<span class="material-symbols-outlined">
account_circle
</span>
				<div>Me</div>
			</div>
		</div>
	</div>
);
}

export default Card;