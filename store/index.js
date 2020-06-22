import Vuex from 'vuex'
import stocks from '../assets/data/stocks'

const createStore = () => {
    return new Vuex.Store({
        state : {
            stocks: [],
            funds: 10000,
            portfolio: []
        },
        mutations: {
            setFund(state,fund) {
                state.funds = fund
            },
            setStoke(state, stocks){
                state.stocks = stocks
            },
            buystock(state, {stockId,quantity,stockPrice,stockName}){
                const record = state.portfolio.find(
                        element => element.id === stockId
                    )
                if(record){
                    record.quantity += quantity
                }else {
                    state.portfolio.push({
                        id : stockId,
                        quantity : quantity,
                    })
                }
                state.funds -= stockPrice * quantity
            },
            sellstock(state,{stockId,quantity,stockPrice}){
                const record = state.portfolio.find(
                    element => element.id === stockId
                )
                if(record.quantity > quantity){
                    record.quantity -= quantity
                }else {
                    state.portfolio.splice(state.portfolio.indexOf(record), 1)
                }
                state.funds += stockPrice * quantity
            },
            randomStock(state){
                state.stocks.forEach(stock => {
                    stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
                })
            },
            setPortfolio(state,portfolioStock) {
                state.portfolio = portfolioStock
            }
        },
        actions: {
            initStocks(vuexContext) {
                vuexContext.commit('setStoke', stocks)
            },
            buyStocks(vuexContext , order){
                vuexContext.commit('buystock',order)
            },
            sellStocks(vuexContext, order){
                vuexContext.commit('sellstock', order)
            },
            randomizeStocks (vuexContext) {
                vuexContext.commit('randomStock')
            },
            saveDataToStore () {
                const data = {
                    funds : this.getters.getFunds,
                    stocks : this.getters.getStocks,
                    portfolio: this.getters.getPortfolioStock
                }
                this.$axios.$put('https://vuejs-stock-tracker-2f030.firebaseio.com/nuxtstock.json',data)
                .then(result => console.log(result))
                .catch(e => console.log(e))
            },
            loadDataToStore (vuexContext) {
                this.$axios.$get('https://vuejs-stock-tracker-2f030.firebaseio.com/nuxtstock.json')
                .then(result => {
                    vuexContext.commit('setFund',result.funds)
                    vuexContext.commit('setStoke',result.stocks)
                    vuexContext.commit('setPortfolio',result.portfolio)
                })
                .catch(e => {
                    console.log(e)
                })
            }
        },
        getters: {
            getFunds(state) { 
                return state.funds
            },
            getStocks(state) {
                return state.stocks
            },
            getPortfolioStock(state) {
                return state.portfolio
            },
            stockPortfolio (state ) {
                return state.portfolio.map(stock => {
                    const record = state.stocks.find(element => element.id == stock.id);
                    return {
                        id : stock.id,
                        quantity : stock.quantity,
                        name : record.name,
                        price : record.price
                    }
                })
            },
        }
    })
}
export default createStore