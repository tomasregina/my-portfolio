<template>
  <div>
    <p class="text-left pl-3 mb-10">
      When I got some free time, besides bicycle and music, I time to time make
      some simple wep app to test some intersting technology. Here are few of
      them...
    </p>
    <div v-for="project in projects.list" :key="project.id" class="text-left">
      <ProjectShowcaseTemplate
        :title="project.title"
        :techStack="project.techStack"
        :date="project.date"
        :link="project.link"
        :githubRepo="project.githubRepo"
        :description="project.descritpion"
        :imgsArr="project.imgsArr"
      />
    </div>
  </div>
</template>
<script>
import projects from '../assets/projects.json';
import ProjectShowcaseTemplate from '../components/ProjectShowcaseTemplate.vue';

export default {
  data() {
    return {
      projects
    };
  },
  components: {
    ProjectShowcaseTemplate
  }
};
</script>
