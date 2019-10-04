# JupyterLab Tutorial 

###### ...for the [Jupyter workshop](https://indico.desy.de/indico/event/23354/) during the [17th International Conference on Accelerator and Large Experimental Physics Control Systems (ICALEPSC2019)](https://icalepcs2019.bnl.gov/workshops.html)


JupyterLab is the next generation of the notebook interface. This talk
will start with an overview of the JupyterLab interface to show how it
can be used for more than just editing notebooks.  JupyterLab was
designed with extensibility in mind, so next I will show how to create
a plugin that adds custom functionality to the interface. Then I will
show some existing extensions that target the scientific ecosystem,
including support for exploring HDF5 files. Finally, I will end with
an exploration of new features coming to JupyterLab.


## Setup

```bash
conda env create -f environment.yml
conda activate icalepcs-2019-jupyterlab
./postBuild

jupyter lab
```


## JupyterLab

...is notebook?
...is the next generation notebook?
...is customizable?
...is a science operating system?
...is a community of people working together?


[Overview of the UI](https://github.com/jupyterlab/jupyterlab-demo/blob/master/narrative/jupyterlab.md)


## Extensions, extensions, extensions

Everything is an extension!

Recent work on an hdf5 viewer.

Integrates with other work on a general purpose data registry extension.

* Show workflow opening file from dataregistry, doing editing, saving metadata, viewing.


## Creating your own


Do you have custom visualizations you want to show?

Create simple mimerender extension


Do you want to update those visualizations?

Use display update.

## Bringing it back together

You can use JupyterLab to help you do research, to help you collaborate.

But you are. also JupyterLab! Or can be, however much you desire.

Lots of people contribubte, show graph of contributions.

You might think this requires fixing bugs, learning about internals. Its also really helpful just to interact with the community, help respond to and triage issues. You can have a huge impact and work with a bunch of fun people!

Anything you are interested in, I am happy to help you one on one to get up to speed and support you.
