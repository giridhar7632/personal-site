<script lang="ts">
    export let link: string = 'https://github.com/giridhar7632'
    export let name: string = ''
    export let description: string = ''
    export let image: string = ''
</script>


<div class="article-container">
    <div class="article-content">
        <div class="article-title">
            <a href={link} target="_blank" class="article-name"><b>{name}</b></a>
          </div>
          <p class="article-description">
              {description}
          </p>
        </div>
    

    <img loading="lazy" class="article-image" src={image} alt={'feature_image'} />
</div>

<style>
    .article-container {
      background-color: #fafafa;
	  border: 1px solid #e5e5e5;
	  border-radius: 8px;
	  margin-bottom: 0px;
	  padding: 16px;

      display: flex;
      gap: 16px;
      justify-content: space-between;
      align-items: center;
	}
	
	.article-title {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-bottom: 8px;
	}
	
	.article-name {
	  font-size: 1rem;
	  color: #2f81f7!important;
	  text-decoration: none;
	}
	
	b {
		font-weight: 600;
	}
	
	.article-description {
	  color: #586069;
	  font-size: 14px;
	  margin-bottom: 8px;
	}

    .article-image {
        height: 100%;
        width: 150px;
        object-fit: cover;
        border-radius: 4px;
        height: 100px;
    }
</style>