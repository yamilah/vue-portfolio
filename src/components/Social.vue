<template>
  <ul class="icons">
    <li class="icon-envelope">
      <a href="mailto:yami@yamilah.com" target="_blank">
        <p>yami@yamilah.com</p>
      </a>
    </li>
    <li class="icon-social-github">
      <a href="https://github.com/yamilah" target="_blank">
        <p>github.com/yamilah</p>
      </a>
    </li>
    <li class="icon-social-linkedin">
      <a href="https://linkedin.com/in/yamilah" target="_blank">
        <p>linkedin.com/in/yamilah</p>
      </a>
    </li>
  </ul>
</template>

<style lang="sass" scoped>

  @import ../sass/utils

  .icons
    display: flex

    p
      padding-left: 10px

      +typeface($weight: 400, $family: "Mukta Vaani")
      text-transform: uppercase
      letter-spacing: 1px

      // @media (min-width: 576px) and (max-width: 768px)
      //   &:not(1)
      //     display: none

    li
      height: 23px

      display: flex
      align-items: baseline

      @media (min-width: 992px)
        &:not(:first-child)
          margin-left: 60px

      &:hover
        border-bottom: 1px solid black

    @media (max-width: 576px)
      flex-direction: column

</style>
