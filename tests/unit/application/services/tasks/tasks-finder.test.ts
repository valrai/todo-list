import faker from 'faker'

import TasksFinderService from '@application/services/tasks/tasks-finder'
import { FakeTasksRepository } from '@tests/shared/mocks/repositories'

const tasksRepository = new FakeTasksRepository()
const tasksFinderService = new TasksFinderService(tasksRepository)

describe('TasksFinderService', () => {
  describe('FindMany', () => {
    it('Should return all tasks of the given user', async () => {
      const userId = faker.datatype.uuid()
      const tasks = await tasksFinderService.findMany(userId)

      expect(tasks).toHaveLength(2)
      expect(tasks.filter((t) => t.userId === userId)).toHaveLength(2)
    })

    it('Should return a empty array if no tasks are found for the given user', async () => {
      const userId = faker.datatype.uuid()

      jest.spyOn(tasksRepository, 'findMany').mockResolvedValue([])

      const tasks = await tasksFinderService.findMany(userId)

      expect(tasks).toHaveLength(0)
    })
  })
})
