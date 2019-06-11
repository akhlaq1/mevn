<template>
    <div class="col-md-8 main-content">
       <!--Div that will hold the dashboard-->
    <div id="dashboard_div">
      <!--Divs that will hold each control and chart-->
      <div id="filter_div"></div>
      <div id="chart_div"></div>
    </div>
  <p style ="   color: white;
    font-size: xx-large;">Lifetime Stats</p>

    <b-btn v-b-modal.kd>View kd graph</b-btn> &nbsp &nbsp
    <b-btn v-b-modal.winloss>View win/loss graph</b-btn>
      <b-modal id="winloss" title="Bootstrap-Vue">
<pie-chart :data="[['Wins', 11], ['Losses', 2]]"></pie-chart>
  </b-modal>
      <b-modal id="kd" title="Bootstrap-Vue">
<pie-chart :data="[['Kills', 999], ['Deaths', 222]]"></pie-chart>
  </b-modal>
<b-card overlay
          img-src="images/banner.jpg"
          img-alt="Card Image"
          text-variant="white"
          title=""
          bg-variant="dark"
          >
  <p class="card-text"><br>
     Lifetime statistics since joining WagerGames </p>
        <b-table striped hover :items="items2"></b-table>
</b-card>
<br>
  <p style ="   color: white;
    font-size: xx-large;">Most recent games</p>

  <b-card overlay
          img-src="images/banner2.jpg"
          img-alt="Card Image"
          text-variant="white"
          title=""
          bg-variant="dark"
          border-variant="info"
          >
            <b-btn v-b-modal.kd2>View kd graph</b-btn>
         <b-modal id="kd2" title="Bootstrap-Vue">
               <GChart
    type="PieChart"
    :data="chartData2"
    :options="chartOptions2"
    bg-variant="dark"
  />
         </b-modal>
    <p class="card-text">
      <br>
     <b>Statistics for the four latest games played.</b>
        <b-table striped hover :items="items"></b-table>
    </p>
  </b-card>
</div>                   
                                                      
</template>

<script>


const items = [
  { Result: 'Win', matchID: 40, hero: 'Invoker', Kills: 9, Deaths: 2, Dire: 38, Radiant: 32},
  { Result: 'Win', matchID: 21, hero: 'Lifestealer', Kills: 10,Deaths: 2, Dire: 38, Radiant: 32   },
  { Result: 'Win', matchID: 89, hero: 'Pudge', Kills: 19, Deaths: 2, Dire: 38,  Radiant: 32},
  { Result: 'Loss', matchID: 38, hero: 'Invoker', Kills: 2, Deaths: 2, Dire: 38, Radiant: 32} 
]

const items2 = [
  { Kills: 999, Deaths: 222, Wins: 11, Losses: 2, MMR: 4000}]


import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  } , 
  data () {
    return {
       name: 'Stats',
      // Array will be automatically processed with visualization.arrayToDataTable function      
      items: items,
      items2: items2,
      }
    }
 
}
</script>
