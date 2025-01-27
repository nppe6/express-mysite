import fs from 'fs/promises'
import path from 'path'

const upload = async (file: Array<unknown>) => {
  const files = file[0] as Record<string, any>
  const fileType = file[1] as string

  await fs.rename(
    path.join(__dirname, '../public/uploads/') + files[0].filename,
    path.join(__dirname, '../public/uploads/') + files[0].filename + '.' + fileType,
  )

  return files[0].filename + '.' + fileType
}

export default {
  upload,
}
