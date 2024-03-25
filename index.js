const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])
function returnFirstTwoDrivers (){
    return drivers.slice(0, 2)
    }
function  returnLastTwoDrivers(){
    return drivers.slice(-2)
} 
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

function  createFareMultiplier(int){
    return function(fare){
        return fare * int
    }
}
const Doubler = [createFareMultiplier]
function fareDoubler(Doubler){
    return Doubler * 2
}
const tripler = [createFareMultiplier]
function fareTripler(tripler){
    return tripler * 3
}
function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers)

}