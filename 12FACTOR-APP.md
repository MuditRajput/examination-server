# **12 factor APP Stack**

As we all know that programming can be done easily but now a days make a program is not the only thing a developer should be doing to develop a software. Any developer can make a code but a code which can be easily understandable by other developers, and testers around the world is the ideal code. An ideal code should have following qualities:
- Should be clean and properly formatted.
- Should be suitable to be uploaded on any modern cloud platforms.
- should be made using proper tools and architecture designs.

To achieve these goals. A developer should follow the 12 factor APP Stack Methodology:

1. **Codebase:**
According to Codebase we should not create two different repositories when all we need to do is different setup for production. we can have multiple version of the app deployed, just make sure that their share the codebase.

2. **Dependencies:**
Thinking about dependencies usually we do not have to go beyond the dependant libraries. As long as we use a standard build tool (npm, yarn, maven, gradle, NuGet) we have the basics covered. It is more difficult to manage dependencies such as- required database connections, services, etc. for which we can do it with the help of tools such as chef, puppet and kubernetes.

3. **Config:**
It becomes hard to configure the files as number of dependencies increases. The solution to make it easy is to keep configuration files in the environments and always update all the config files when a new service is introduced.

4. **Backing services:**
According to Backing services we should create any service as these services should be interchangeable and should not create any error when interchanged.

5. **Build, release, run:**
These terms have a great and individual meaning in the development:
    - **Build:** Converting code repo into an executable bundle known as the build.
    - **Release:** Getting the build and combining it with a config on a certain environment- ready to run. This is also often referred to as deployment.
    - **Run:** Starting the app in the deployment.

6. **Processes:**
According to this we should execute the app as one or more stateless processes.

7. **Port binding:**
Port binding says that we should make sure that your service is visible to others via port binding. Like others will see our product as a resource.

8. **Concurrency:**
The idea of concurrency is that, we need to scale, you should be deploying more copies of your application (processes) rather than trying to make your application larger (by running a single instance on the most powerful machine available).

9. **Disposability:**
 Disposability says that it is important that they can go up and down quickly. Without this, automatic scaling and ease of deployment, development- are being diminished. This is one of the factors, where if we don’t get it exactly right- the system will still work. However, the goal here is to achieve resounding success, not just an acceptable compromise.

10. **Dev/prod parity:**
The differences between dev and prod can be significantly larger than people realise. It goes beyond the configuration and data, but also includes: The time gap, The personnel gap, The tools gap.

11. **Logs:**
This factor more than any other is about excellence rather than adequacy. Success is possible without logs as event streams, but you will be missing on a dramatic upside here.

12. **Admin processes:**
It says that we should manage the service more rather than developing new services. Which includes the good servers to carryout the process and good user experience.