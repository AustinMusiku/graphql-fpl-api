const fetch = require('node-fetch');
const urls = require('./urls');

const { myCache } = require('./cacheControllers');

const fetchGeneral = async () => {
    try{
        // fetch general
        let response = await fetch(urls.general, {
            headers: {
                'User-Agent': 'ANYTHING_WILL_WORK_HERE'
            }
        });
        general = await response.json();
        myCache.set('general', general, 172800);
        console.log('done general')
        
        // // fetch fixtures
        // let response2 = await fetch(urls.fixtures, {
        //     headers: {
        //         'User-Agent': 'ANYTHING_WILL_WORK_HERE'
        //     }
        // });
        // fixtures = await response2.json();
        // myCache.set('fixtures', fixtures, 172800);
        // console.log('done fixtures')
        
    }catch(err){
        throw err;
    }
}

const getFixtures = async () => {
    try{
        let fixtures = myCache.get('fixtures');
        if(fixtures){
            return fixtures;
        }else{
            let url = urls.fixtures;
            let response = await fetch(url, {
                headers: {
                'User-Agent': 'ANYTHING_WILL_WORK_HERE'
                }
            });
            fixtures = await response.json();
            myCache.set('fixtures', fixtures, 172800);
            return fixtures;
        }

    }catch(err){
        console.log(err);
    }
}

const getAllPlayers = async () => {
    try {
        let general = myCache.get('general');

        if(general){
            return general.elements;
        }else{
            let url = urls.general;
            let response = await fetch(url, {
                headers: {
                    'User-Agent': 'XXXXXX'
                }
            });
            let json = await response.json();
            general = json;
            myCache.set('general', general, 172800)
            return general.elements;
        }
    } catch (err) {
        throw err;
    }
}

const getAllTeams = async () => {
    try{
        let general = myCache.get('general');
        if(general){
            console.log(general.teams)
            return general.teams;
        }else{
            let url = urls.general;
            let response = await fetch(url, {
                headers: {
                    'User-Agent': 'XXXXXX'
                }
            });
            let general = await response.json();
            myCache.set('general', general, 172800);
            return general.teams;
        }
    }catch(err){
        throw err;
    }
}

const getPlayer = async (playerId) => {
    try{
        let players = await getAllPlayers();
        let player = players.filter(player => player.id == playerId)
        let { first_name, second_name, id} = player[0];
        return { first_name, second_name, id}
    }catch(err){
        throw err;
    }
}

const getPlayerEventsById = async (playerId) => {
    try{
        let player = myCache.get(`${playerId}`);
        if(player){
            return player;
        }else{
            let url = `${urls.playerById}${playerId}/`;
            let response = await fetch(url, {
                headers: {
                    'User-Agent': 'XXXXXX'
                }
            });
            let player = await response.json();
            myCache.set(`${playerId}`, player, 172800)
            return player;
        }
    }catch(err){
        console.log(err);
    }
}

const getPlayerDataById = async (playerId) => {
    try{
        let players = await getAllPlayers();
        let player = players.filter( player => player.id == playerId );
        return player;
    }catch(err){
        throw err;
    }
}

const getPlayersByTeam = async (teamId) => {
    try{
        let allPlayers = await getAllPlayers();
        let filteredPlayers = allPlayers.filter(player => player.team == teamId );
        return filteredPlayers;
    }catch(err){
        console.log(err);
    }
}

const gameWeeks = async () => {
    try{
        let general = myCache.get('general')
        if(general){
            let gws = general.events;
            return gws
        }else{
            console.log('miss');
            let url = urls.general;
            let response = await fetch(url, {
                headers: {
                    'User-Agent': 'XXXXXX'
                }
            })
            let general = await response.json();
            myCache.set('general', general, 172800)
            return general.events;
        }
    }catch(err){
        console.log(err);
    }
}

// fetchGeneral();

// automatically fetch new data every two days
// setInterval(fetchGeneral, 172800);

module.exports = { getFixtures, getPlayer, getPlayerEventsById, getPlayerDataById, getAllPlayers, getAllTeams, getPlayersByTeam, gameWeeks };