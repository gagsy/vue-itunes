new Vue({
  el: '#app',
  data () {
    return {
      track: {'foo':'bar'},
      user: {'foo':'bar'},
      story: {'foo':'bar'},
      keywords: '',
      search: '',
      loading:true      
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
	computed: {
    filteredResources (){
      if(this.search){
      return this.resources.filter((item)=>{
        return item.title.startsWith(this.search);
      })
      }else{
        return this.resources;
      }
    },
    
    
    
  },
  created() {
    this.getsongs('dil');
  },
  methods: {
    getsongs(term) {
	
	const auth = {
			params: {
                    'term' : term
                }
		}
	
	axios.get('https://itunes.apple.com/search',auth).then(result => { 
		console.log(result.data);
		this.track = result.data.results;
		})
		.catch(error => {
		console.log(error)
		this.errored = true
		})
		.finally(() => this.loading = false)
	},
	searchsongs() {
		//alert(this.search);
		
		if(this.search.length >2)
		{
			this.loading= true;
			this.getsongs(this.search);
		}
		if(this.search.length ==0)
		{
			this.getsongs('dil');
		}
	},
	re_link(link) {
		console.log(link);
		//return link;
		return link.replace("100x100bb", "480x480bb");
	}
	
	
	},
  mounted () {
	  
	   
   const auth = {
			params: {
                    'term' : 'dil'
                }
		}
		
		
  }
})

		
		
	