# Docker Notes and Viva Questions

## What is Docker?

Docker is a platform used to build, package, ship, and run applications inside containers.

A container is a lightweight, portable environment that includes:

- Application code
- Required libraries
- Dependencies
- Runtime settings

This ensures the application works the same way on:

- Your laptop
- Testing servers
- Production cloud servers

People use Docker because it solves the common problem:

> "It works on my machine, but not on the server."

---

# Simple Analogy

Think of Docker containers like sealed lunch boxes:

- Everything needed for the meal is packed inside
- You can carry it anywhere
- It behaves the same wherever you open it

---

# Docker Viva Questions and Answers

## 1. What is Docker?

Docker is an open-source platform used to develop, package, and run applications inside lightweight containers.

---

## 2. What is a container?

A container is a lightweight, portable environment that includes the application and all its dependencies needed to run.

---

## 3. Difference between Docker and Virtual Machine?

| Docker | Virtual Machine |
|--------|-----------------|
| Uses containerization | Uses virtualization |
| Lightweight | Heavy |
| Shares host OS kernel | Has separate OS |
| Faster startup | Slower startup |

---

## 4. What is a Docker Image?

A Docker image is a read-only template used to create containers.

### Examples:
- Ubuntu image
- Python image

---

## 5. What is Docker Hub?

Docker Hub is an online repository where Docker images are stored and shared.

Website: https://hub.docker.com

---

## 6. What is a Dockerfile?

A Dockerfile is a text file containing instructions to build a Docker image automatically.

### Common Instructions:
- `FROM`
- `RUN`
- `COPY`
- `CMD`

---

## 7. What is the use of `docker run` command?

It creates and starts a container from an image.

### Example

```bash
docker run ubuntu
```

---

## 8. Difference between Image and Container?

- Image → Blueprint or template
- Container → Running instance of an image

---

## 9. What is Docker Compose?

Docker Compose is a tool used to manage multi-container Docker applications using a YAML file.

Documentation: https://docs.docker.com/compose/

---

## 10. What is the use of `docker ps`?

It displays running containers.

```bash
docker ps
```

---

## 11. What is the purpose of `docker pull`?

It downloads Docker images from Docker Hub.

### Example

```bash
docker pull nginx
```

---

## 12. What is port mapping in Docker?

Port mapping connects a container port to a host machine port.

### Example

```bash
docker run -p 8080:80 nginx
```

---

## 13. What is Docker Engine?

Docker Engine is the core service that builds and runs Docker containers.

Website: https://www.docker.com/products/docker-desktop/

---

## 14. What are Docker volumes?

Volumes are used for persistent data storage in Docker containers.

---

## 15. What is the difference between CMD and ENTRYPOINT?

- `CMD` → Provides default commands
- `ENTRYPOINT` → Fixed executable that always runs

---

## 16. What is Docker Swarm?

Docker Swarm is Docker’s native clustering and orchestration tool used to manage multiple Docker hosts.

---

## 17. What is Kubernetes? How is it related to Docker?

Kubernetes is a container orchestration platform used to automate deployment, scaling, and management of containers.

Docker containers can run inside Kubernetes.

---

## 18. Advantages of Docker

- Fast deployment
- Lightweight
- Easy scalability
- Consistent environment
- Better resource utilization

---

## 19. What command is used to stop a container?

```bash
docker stop <container_id>
```

---

## 20. What is the lifecycle of a Docker container?

Created → Running → Paused → Stopped → Deleted

---

# Important One-Line Viva Answers

## Q: Why is Docker popular?

Because it provides portability, consistency, and lightweight application deployment.

---

## Q: Can multiple containers run on the same OS?

Yes, multiple containers can share the same host OS kernel.

---

## Q: Is Docker a virtualization tool?

No, Docker uses containerization, not full virtualization.

---

## Q: Which file is used to create Docker images?

Dockerfile.

---

## Q: Which command builds an image?

```bash
docker build
```

---

# Most Important Docker Commands

```bash
docker images
docker ps
docker pull
docker run
docker stop
docker start
docker build
docker rm
docker rmi
```

---

# Additional Topics You Can Learn

- Top 30 Docker viva questions
- Docker interview questions for freshers
- Docker commands cheat sheet
- Kubernetes + Docker viva
- Scenario-based Docker viva questions