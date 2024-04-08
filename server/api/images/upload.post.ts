export default eventHandler(async (event) => {
  await requireUserSession(event)
  const form = await readFormData(event)
  const image = form.get('image') as File

  // @ts-expect-error: jpg format
  ensureBlob(image, { maxSize: '20MB', types: [
    'image/jpeg',
    'image/png',
    'image/heic',
    'image/webp',
    'image/gif',
    'image/jpg'
  ] })

  return hubBlob().put(image.name, image)
})
