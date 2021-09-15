import { HttpRequest, HttpResponse } from '@presentation/contracts/http'
import { TasksFinder } from '@domain/usecases/tasks'
import { TaskViewModel } from '@presentation/view-models/tasks'
import { Controller } from '@presentation/contracts/controller'
import { ok, serverError } from '@presentation/helpers/http'

class FindTasksController implements Controller {
  constructor(private readonly tasksFinder: TasksFinder) {}

  async handle(request: HttpRequest): Promise<HttpResponse<TaskViewModel[]>> {
    try {
      const { user_id } = request.query
      const tasks = await this.tasksFinder.findMany(user_id)
      const viewModel = TaskViewModel.mapCollection(tasks)

      return ok(viewModel)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}

export default FindTasksController
