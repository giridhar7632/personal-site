<script lang="ts">
    export let link: string = 'https://github.com/giridhar7632'
    export let name: string = ''
    export let description: string = ''
    export let lang: string = ''
</script>

<div class="repo-container">
    <div class="repo-header">
      <a href={link} target="_blank" class="repo-name"><b>{name}</b></a>
    </div>
    <p class="repo-description">
        {description}
    </p>
    <div class="repo-stats">
      <div class="repo-language">
        <span class="language-color {lang.toLowerCase()}"></span>
        <span class="language-name">{lang}</span>
      </div>
    </div>
  </div>

<style>
    .repo-container {
      background-color: #fafafa;
	  border: 1px solid #e5e5e5;
	  border-radius: 8px;
	  margin-bottom: 0px;
	  padding: 16px;
	}
	
	.repo-header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-bottom: 8px;
	}
	
	.repo-name {
	  font-size: 1rem;
	  color: #2f81f7!important;
	  text-decoration: none;
	}
	
	b {
		font-weight: 600;
	}
	
	.repo-description {
	  color: #586069;
	  font-size: 14px;
	  margin-bottom: 8px;
	}
	
	.repo-stats {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  font-size: 12px;
	  color: #586069;
	}
	
	.repo-stats span {
	  margin-right: 8px;
	}
	
	.repo-language {
	  display: flex;
	  align-items: center;
	}
	
	.language-color {
	  display: inline-block;
	  width: 12px;
	  height: 12px;
	  border-radius: 50%;
	  margin-right: 8px;
	}
	
	.language-name {
	  color: #586069;
	}
	
	.language-color.html {
	  background-color: #e34c26;
	}
	
	.language-color.css {
	  background-color: #563d7c;
	}
	
	.language-color.javascript {
	  background-color: #f1e05a;
	}
	
	.language-color.python {
	  background-color: #3572a5;
	}
	
	.language-color.java {
	  background-color: #b07219;
	}
	
	.language-color.ruby {
	  background-color: #701516;
	}
	
	.language-color.typescript {
	  background-color: #3178c6;
	}
	
	.language-color.c {
	  background-color: #555555;
	}
	
	.language-color.csharp {
	  background-color: #178600;
	}
	
	.language-color.cplusplus {
	  background-color: #f34b7d;
	}
	
	.language-color.assembly {
	  background-color: #6E4C13;
	}
</style>