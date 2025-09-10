import * as userService from "../services/userService.js";

export async function getUsers(req, res) {
  try {
    const { page, page_size, q, role, is_active } = req.query; // pode ser post
    const users = await userService.getUsers({ page, page_size, q, role, is_active });
    return res.status(200).json(users);
  } catch (error) {
        next(error);
    }
}

export async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }

    return res.status(200).json({ data: user });
  } catch (error) {
        next(error);
    }
}
