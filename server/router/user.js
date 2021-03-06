module.exports = (app, router) => {
  const controller = app.controllers.user
  const prefix = '/happy_pig/api'
  router.get(`${prefix}/v1/user/get_user_info`, controller.getUserInfo)
  router.get(`${prefix}/v1/user/get_student_info`, controller.getStudentInfo)
  router.post(`${prefix}/v1/user/update_user_info`, controller.updateUserInfo)
  router.post(`${prefix}/v1/user/add_user_info`, controller.addUserInfo)
  router.post(`${prefix}/v1/user/register`, controller.register)
  router.post(`${prefix}/v1/user/login`, controller.login)
}
