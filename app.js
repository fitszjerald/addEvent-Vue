Vue.config.devtools = true;

new Vue({
    el : "#events",
    
    data : {
        
        
        events : [
        {    
            id: 1,
            name: 'TIFF',
            description: 'Toronto International Film Festival',
            date: '2015-09-10'
        },
        {
            id: 2,
            name: 'The Martian Premiere',
            description: 'The Martian comes to theatres.',
            date: '2015-10-02'
        },
        {
            id: 3,
            name: 'SXSW',
            description: 'Music, film and interactive festival in Austin, TX.',
            date: '2016-03-11'
        }
        ]
    }
})