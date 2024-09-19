import './Rewards.css'
import {useNavigate} from "react-router-dom";

function Reward(){
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
	<div className="Rcon">
	
		<div className="Rtop">
			<div className="RRewards">Rewards</div>
			<div className="Ricon"><span class="material-symbols-outlined">
more_horiz
</span></div>
			
		</div>
		
		<div className="CV">
			<div className="Cv"> 
				
				<div>₦Cashback</div>
				<div><span class="material-symbols-outlined">
help
</span></div>
				<div className="CvVoucher">Voucher</div>
			</div>
			
			<div className="cV">
				<div></div>
				<div>108.31</div>
				<div></div>
				<div className="cVN">3</div>
				<div></div>
				</div>
		</div>
		
		<div className="Dailybonus">
			<div>
				<div className="Dailybonusicon">
					<div><span class="material-symbols-outlined">
event
</span></div>
				</div>
			</div>
			<div className="Dailybonustext">
				<div className="DTDailybonus">Daily bonus</div>
				<div className="Dbtext">get up to 100 bonus</div>
			</div>
			<div> 
				<div className="DbGetNow">
					<div>Get Now</div>
				</div>
			</div>
		</div>
		
		<div className="DailyBonus"> Daily Bonus</div>
		<div className="Glo">
			<div>
				<div className="DailyBGloicon">
					<div><span class="material-symbols-outlined">
signal_cellular_alt
</span></div> 
				</div>
			</div>
			<div className="DailybonustextGlo">
				<div className="DTDailybonusGlo"> Glo Airtime</div>
				<div className="DbtextGlo">get up to 100 bonus</div>
			</div>
			<div> 
				<div className="DbGetNowGlo">
					<div>Go</div>
				</div>
			</div>
		</div>
		
		<div className="mobile">
			<div>
				<div className="DailyBmobileicon">
					<div><span class="material-symbols-outlined">
signal_cellular_alt
</span></div>
				</div>
			</div>
			<div className="Dailybonustextmobile">
				<div className="DTDailybonusmobile"> 9mobile Airtime</div>
				<div className="Dbtextmobile">get up to 100 bonus</div>
			</div>
			<div> 
				<div className="DbGetNowmobile">
					<div>  Go</div>
				</div>
			</div>
		</div>
			
		
		<div className="MAirtime">
			<div>
				<div className="DailyBMAirtimeicon">
					<div><span class="material-symbols-outlined">
signal_cellular_alt
</span></div>
				</div>
			</div>
			<div className="DailybonustextMAirtime">
				<div className="DTDailybonusMAirtime"> MTN/Airtel  Airtime</div>
				<div className="DbtextMAirtime">get up to 100 bonus</div>
			</div>
			<div> 
				<div className="DbGetNowMAirtime">
					<div>Go</div>
				</div>
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

export default Reward;